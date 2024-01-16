import { Button, Group, NumberInput, Stack, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm, isNotEmpty, isInRange } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useNavigate, useNavigation, useSubmit } from "@remix-run/react";
import { useEffect } from "react";
import { useTypedActionData } from "remix-typedjson";
import { ActionPembelianType } from "~/routes/_app.pembelian.tambah";
import CustomModal from "~/presentation/components/Modal/Modal";
import SelectAsync from "../Input/SelectAsync";

export default function PembelianForm() {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const actionData = useTypedActionData<ActionPembelianType>();
	const submit = useSubmit();

	const isSubmitting = navigation.state !== "idle";
	const initialValues = {
		invoice: "",
		medicineId: null,
		supplierId: null,
		date: null,
		total: 0,
		quantity: 0,
	};
	const form = useForm({
		initialValues,
		validate: {
			invoice: isNotEmpty("Faktur tidak boleh kosong"),
			medicineId: isNotEmpty("Obat tidak boleh kosong"),
			supplierId: isNotEmpty("Supplier tidak boleh kosong"),
			date: isNotEmpty("Tanggal tidak boleh kosong"),
			total: isInRange({ min: 1 }, "Total tidak boleh kosong"),
			quantity: isInRange({ min: 1 }, "Kuantitas tidak boleh kosong"),
		},
	});

	const onClose = () => {
		navigate("..");
	};

	const onSubmit = (values: any) => {
		// YYYY-MM-DD
		const date = new Date(values.date).toLocaleDateString("en-CA");
		submit(
			{ ...values, date },
			{
				method: "post",
				action: "../tambah",
			}
		);
	};

	useEffect(() => {
		if (!actionData) return;
		if (actionData?.message) {
			const failed = actionData?.status > 300;
			notifications.show({
				title: failed ? "Gagal" : "Sukses",
				message: actionData.message,
				autoClose: 5000,
				color: failed ? "red" : "blue",
			});
		}
	}, [actionData]);

	return (
		<>
			<CustomModal onClose={onClose} title="Satuan">
				<form onSubmit={form.onSubmit(onSubmit)}>
					<Stack gap="sm">
						<TextInput
							data-autofocus
							label="No Faktur"
							withAsterisk
							{...form.getInputProps("invoice")}
						/>
						<DatePickerInput
							label="Tanggal"
							withAsterisk
							{...form.getInputProps("date")}
						/>
						<SelectAsync
							valueKey="id"
							labelKey="name"
							label="Supplier"
							isError={form.errors.supplierId}
							actionUrl="/supplier"
							onChange={(e) => form.setValues({ supplierId: e.id })}
						/>
						<SelectAsync
							valueKey="id"
							labelKey="name"
							label="Obat"
							isError={form.errors.medicineId}
							actionUrl="/obat"
							onChange={(e) => form.setValues({ medicineId: e.id })}
						/>
						<NumberInput
							label="Kuantitas"
							withAsterisk
							min={1}
							{...form.getInputProps("quantity")}
						/>
						<NumberInput
							label="Total"
							withAsterisk
							{...form.getInputProps("total")}
							min={1}
						/>
						<Group justify="flex-end">
							<Button onClick={onClose} variant="transparent" color="red">
								Tutup
							</Button>
							<Button
								type="submit"
								disabled={isSubmitting}
								loading={isSubmitting}
							>
								Simpan
							</Button>
						</Group>
					</Stack>
				</form>
			</CustomModal>
		</>
	);
}
