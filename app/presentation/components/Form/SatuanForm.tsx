import { Button, Group, Stack, TextInput } from "@mantine/core";
import { useForm, isNotEmpty } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useNavigate, useNavigation, useSubmit } from "@remix-run/react";
import { useEffect } from "react";
import { useTypedActionData, useTypedLoaderData } from "remix-typedjson";
import CustomModal from "~/presentation/components/Modal/Modal";
import type { LoaderIdSatuanType } from "~/routes/_app.satuan.$id";
import type { ActionSatuanType } from "~/routes/_app.satuan.tambah";
import { type CreateSatuanDto } from "~/services/satuan.server";

export default function SatuanForm() {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const actionData = useTypedActionData<ActionSatuanType>();
	const loaderData = useTypedLoaderData<LoaderIdSatuanType>();
	const submit = useSubmit();

	const detailData = loaderData?.data;
	const isSubmitting = navigation.state !== "idle";
	const initialValues: CreateSatuanDto = {
		name: detailData?.name || "",
	};
	const form = useForm({
		initialValues,
		validate: {
			name: isNotEmpty("Nama tidak boleh kosong"),
		},
	});
	const onClose = () => {
		navigate("..");
	};
	const onSubmit = (values: any) => {
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
			<CustomModal onClose={onClose} title="Satuan">
				<form onSubmit={form.onSubmit(onSubmit)}>
					<Stack gap="sm">
						<TextInput
							data-autofocus
							label="Nama"
							withAsterisk
							{...form.getInputProps("name")}
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
