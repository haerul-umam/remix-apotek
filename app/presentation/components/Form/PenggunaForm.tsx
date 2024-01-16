import {
	Button,
	Group,
	PasswordInput,
	Select,
	SimpleGrid,
	TextInput,
	Textarea,
} from "@mantine/core";
import {
	useForm,
	isNotEmpty,
	matches,
	isEmail,
	hasLength,
} from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useNavigate, useNavigation, useSubmit } from "@remix-run/react";
import { useEffect } from "react";
import { useTypedActionData, useTypedLoaderData } from "remix-typedjson";
import { LoaderIdPenggunaType } from "~/routes/_app.pengguna.$id";
import { ActionPenggunaType } from "~/routes/_app.pengguna.tambah";
import CustomModal from "~/presentation/components/Modal/Modal";
import { DatePickerInput } from "@mantine/dates";

export default function PenggunaForm() {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const actionData = useTypedActionData<ActionPenggunaType>();
	const loaderData = useTypedLoaderData<LoaderIdPenggunaType>();
	const submit = useSubmit();

	const isSubmitting = navigation.state !== "idle";
	const {
		id = "",
		address = "",
		birthday = null,
		email = "",
		fullName = "",
		hp = "",
		level = "ADMIN",
		status = "1",
	} = loaderData?.data || {};
	const initialValues = {
		password: "",
		address,
		birthday,
		email,
		fullName,
		level,
		status: status.toString(),
		hp,
	};
	const form = useForm({
		initialValues,
		validate: {
			...(id
				? null
				: { password: hasLength({ min: 6 }, "Minimal 6 karakter") }),
			birthday: isNotEmpty("Tanggal lahir tidak boleh kosong"),
			email: isEmail("Email tidak valid"),
			fullName: isNotEmpty("Nama tidak boleh kosong"),
			level: isNotEmpty("Level tidak boleh kosong"),
			status: isNotEmpty("Status tidak boleh kosong"),
			hp: matches(
				/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
				"Hp tidak valid"
			),
		},
	});
	const onClose = () => {
		navigate("..");
	};
	const onSubmit = (values: any) => {
		if (values?.password?.trim()?.length === 0) delete values.password;
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
			<CustomModal size="lg" onClose={onClose} title="Pengguna">
				<form onSubmit={form.onSubmit(onSubmit)}>
					<SimpleGrid cols={2}>
						<TextInput
							data-autofocus
							label="Nama lengkap"
							withAsterisk
							{...form.getInputProps("fullName")}
						/>
						<DatePickerInput
							label="Tanggal lahir"
							withAsterisk
							{...form.getInputProps("birthday")}
						/>
						<TextInput label="HP" withAsterisk {...form.getInputProps("hp")} />
						<Select
							label="Level"
							data={[
								{ label: "ADMIN", value: "ADMIN" },
								{ label: "KEPALA GUDANG", value: "HEAD_WH" },
							]}
							{...form.getInputProps("level")}
							withAsterisk
						/>
						<Select
							label="Status"
							data={[
								{ label: "AKTIF", value: "1" },
								{ label: "NON AKTIF", value: "0" },
							]}
							{...form.getInputProps("status")}
							withAsterisk
						/>
						<TextInput
							label="Email"
							withAsterisk
							{...form.getInputProps("email")}
						/>
						<PasswordInput
							withAsterisk={id ? false : true}
							{...form.getInputProps("password")}
							label="Password"
							description={id ? "kosongkan jika tidak ingin ubah password" : ""}
						/>
					</SimpleGrid>
					<Textarea label="Alamat" {...form.getInputProps("address")} mt="md" />
					<Group justify="flex-end" mt="md">
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
				</form>
			</CustomModal>
		</>
	);
}
