import { Button, Group, Stack, TextInput, Textarea } from "@mantine/core";
import { useForm, isNotEmpty, matches } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useNavigate, useNavigation, useSubmit } from "@remix-run/react";
import { useEffect } from "react";
import { useTypedActionData, useTypedLoaderData } from "remix-typedjson";
import CustomModal from "~/presentation/components/Modal/Modal";
import type { LoaderIdSupplierType } from "~/routes/_app.supplier.$id";
import type { ActionSupplierType } from "~/routes/_app.supplier.tambah";
import type { CreateSupplierDto } from "~/services/supplier.server";

export default function SupplierForm() {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const actionData = useTypedActionData<ActionSupplierType>();
	const loaderData = useTypedLoaderData<LoaderIdSupplierType>();
	const submit = useSubmit();

	const detailData = loaderData?.data;
	const isSubmitting = navigation.state !== "idle";
	const initialValues: CreateSupplierDto = {
		name: detailData?.name || "",
		hp: detailData?.hp || "",
		address: detailData?.address || "",
	};
	const form = useForm({
		initialValues,
		validate: {
			name: isNotEmpty("Nama tidak boleh kosong"),
			hp: matches(
				/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
				"Telpon tidak valid"
			),
			address: (value) =>
				value && value?.trim()?.length > 255
					? "Alamat maksimal 255 karakter"
					: null,
		},
	});
	const onClose = () => {
		navigate("..");
	};
	const onSubmit = (values: CreateSupplierDto) => {
		const method = detailData?.id ? "patch" : "post";
		const action = detailData?.id ? "." : "../tambah";
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
			<CustomModal onClose={onClose} title="Supplier">
				<form onSubmit={form.onSubmit(onSubmit)}>
					<Stack gap="sm">
						<TextInput
							data-autofocus
							label="Nama"
							withAsterisk
							{...form.getInputProps("name")}
						/>
						<TextInput
							label="Telpon"
							withAsterisk
							{...form.getInputProps("hp")}
						/>
						<Textarea label="Alamat" {...form.getInputProps("address")} />
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
