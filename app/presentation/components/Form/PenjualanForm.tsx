import { Button, Group, NumberInput, Stack } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm, isNotEmpty, isInRange } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useNavigate, useNavigation, useSubmit } from "@remix-run/react";
import { useEffect } from "react";
import { useTypedActionData } from "remix-typedjson";
import { ActionPembelianType } from "~/routes/_app.pembelian.tambah";
import CustomModal from "~/presentation/components/Modal/Modal";
import SelectAsync from "../Input/SelectAsync";
import type { Medicine } from "@prisma/client";

export default function PenjualanForm() {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const actionData = useTypedActionData<ActionPembelianType>();
	const submit = useSubmit();

	const isSubmitting = navigation.state !== "idle";
	const initialValues = {
		medicineId: "",
		date: null,
		total: 0,
		quantity: 0,
		// for helper only deleted when submit
		price: 0,
		stock: 0,
	};
	const form = useForm({
		initialValues,
		validate: {
			medicineId: isNotEmpty("Obat tidak boleh kosong"),
			date: isNotEmpty("Tanggal tidak boleh kosong"),
			total: isInRange({ min: 1 }, "Total tidak boleh kosong"),
			quantity: isInRange({ min: 1 }, "Kuantitas tidak boleh kosong"),
		},
	});

	const onClose = () => {
		navigate("..");
	};

	const handleSelect = (e: Medicine) => {
		let setQty = 0;
		if (form.values.quantity > e.stock) {
			setQty = e.stock;
		}
		form.setValues({
			medicineId: e.id as unknown as string,
			price: e.sellPrice as unknown as number,
			stock: e.stock,
			...(setQty ? { quantity: setQty } : null),
		});
	};

	const onSubmit = (values: any) => {
		delete values.price;
		delete values.stock;
		submit(values, {
			method: "post",
			action: "../tambah",
		});
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

	useEffect(() => {
		if (form.values.price) {
			form.setFieldValue("total", form.values.price * form.values.quantity);
		}
	}, [form.values.price, form.values.quantity]);

	return (
		<>
			<CustomModal onClose={onClose} title="Satuan">
				<form onSubmit={form.onSubmit(onSubmit)}>
					<Stack gap="sm">
						<DatePickerInput
							label="Tanggal"
							withAsterisk
							{...form.getInputProps("date")}
						/>
						<SelectAsync
							valueKey="id"
							labelKey="name"
							label="Obat"
							isError={form.errors.medicineId}
							actionUrl="/obat"
							onChange={handleSelect}
						/>
						<NumberInput
							label="Kuantitas"
							withAsterisk
							min={1}
							{...(form.values.stock ? { max: form.values.stock } : null)}
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
