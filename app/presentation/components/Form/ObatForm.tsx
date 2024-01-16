import CustomModal from "~/presentation/components/Modal/Modal";
import SelectAsync from "../Input/SelectAsync";
import { Button, Group, NumberInput, Stack, TextInput } from "@mantine/core";
import { useForm, isNotEmpty, isInRange } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useNavigate, useNavigation, useSubmit } from "@remix-run/react";
import { useEffect } from "react";
import { useTypedActionData, useTypedLoaderData } from "remix-typedjson";
import type { ActionSatuanType } from "~/routes/_app.satuan.tambah";
import type { LoaderIdObatType } from "~/routes/_app.obat.$id";

export default function ObatForm() {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const actionData = useTypedActionData<ActionSatuanType>();
	const loaderData = useTypedLoaderData<LoaderIdObatType>();
	const submit = useSubmit();

	const isSubmitting = navigation.state !== "idle";
	const {
		code = "",
		name = "",
		buyPrice = "",
		sellPrice = "",
		stock = "",
		id = null,
		unitId = "",
		unitName = "",
	} = loaderData?.data || {};
	const initialValues = {
		code,
		name,
		buyPrice,
		sellPrice,
		...(id ? null : { stock }),
		unitId,
	};
	const form = useForm({
		initialValues,
		validate: {
			code: isNotEmpty("Kode tidak boleh kosong"),
			name: isNotEmpty("Nama tidak boleh kosong"),
			buyPrice: isInRange({ min: 1 }, "Harga tidak boleh 0"),
			sellPrice: isInRange({ min: 1 }, "Harga tidak boleh 0"),
			unitId: isNotEmpty("Satuan tidak boleh kosong"),
			...(id ? null : { stock: isNotEmpty("Stok tidak boleh kosong") }),
		},
	});
	const onClose = () => {
		navigate("..");
	};
	const onSubmit = (values: any) => {
		const method = id ? "patch" : "post";
		const action = id ? "." : "../tambah";
		submit(values, {
			method,
			action,
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

	return (
		<>
			<CustomModal onClose={onClose} title="Satuan">
				<form onSubmit={form.onSubmit(onSubmit)}>
					<Stack gap="sm">
						<TextInput
							data-autofocus
							label="Kode"
							withAsterisk
							{...form.getInputProps("code")}
						/>
						<TextInput
							label="Nama"
							withAsterisk
							{...form.getInputProps("name")}
						/>
						{!id && (
							<NumberInput
								label="Stok"
								withAsterisk
								min={0}
								{...form.getInputProps("stock")}
							/>
						)}
						<NumberInput
							label="Harga Beli"
							withAsterisk
							decimalScale={2}
							{...form.getInputProps("buyPrice")}
						/>
						<NumberInput
							label="Harga Jual"
							withAsterisk
							decimalScale={2}
							{...form.getInputProps("sellPrice")}
						/>
						<SelectAsync
							valueKey="id"
							labelKey="name"
							label="Satuan"
							isError={form.errors.unitId}
							actionUrl="/satuan"
							onChange={(e) => form.setValues({ unitId: e.id })}
							defaultValue={{ id: unitId, name: unitName }}
						/>
						<Group justify="flex-end">
							<Button onClick={onClose} variant="transparent" color="red">
								Batal
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
