import { Paper, TextInput, PasswordInput, Button, Title } from "@mantine/core";
import { isEmail, useForm, hasLength } from "@mantine/form";
import {
	ActionFunctionArgs,
	LoaderFunctionArgs,
	json,
	redirect,
} from "@remix-run/node";
import {
	useActionData,
	useLoaderData,
	useNavigation,
	useSubmit,
} from "@remix-run/react";
import { login, loginDto } from "~/services/login.server";
import { commitSession, getSession } from "~/session.server";
import { useEffect } from "react";
import { notifications } from "@mantine/notifications";
import classes from "../presentation/styles/AuthenticationImage.module.css";

export default function AuthPage() {
	const navigation = useNavigation();
	const submit = useSubmit();
	const actionData = useActionData<ActionType>();
	const loaderData = useLoaderData<LoaderType>();

	const isSubmitting = navigation.state !== "idle";

	const form = useForm({
		initialValues: {
			email: "",
			password: "",
		},
		validate: {
			email: isEmail("Email tidak valid"),
			password: hasLength({ min: 2 }, "Password minimal 6 karakter"),
		},
	});

	const onSubmit = (values: any) => {
		submit(values, {
			method: "POST",
		});
	};

	useEffect(() => {
		let message;
		if (actionData) {
			message = actionData.message;
		}
		if (loaderData) {
			message = loaderData.error;
		}
		if (message) {
			notifications.show({
				title: "Gagal",
				message,
				autoClose: 5000,
				color: "red",
			});
		}
	}, [actionData, loaderData]);

	return (
		<div className={classes.wrapper}>
			<Paper className={classes.form} radius={0} p={30}>
				<Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
					Selamat datang di Apptik
				</Title>
				<form onSubmit={form.onSubmit(onSubmit)}>
					<TextInput
						{...form.getInputProps("email")}
						label="Email"
						placeholder="hello@gmail.com"
						size="md"
					/>
					<PasswordInput
						label="Password"
						placeholder="password"
						mt="md"
						size="md"
						{...form.getInputProps("password")}
					/>
					<Button
						fullWidth
						mt="xl"
						size="md"
						type="submit"
						disabled={isSubmitting}
						loading={isSubmitting}
					>
						Login
					</Button>
				</form>
			</Paper>
		</div>
	);
}

export async function action({ request }: ActionFunctionArgs) {
	try {
		const formData = await request.formData();
		const schema = loginDto.safeParse(formData);
		if (!schema.success) {
			return json(
				{ message: schema.error.errors[0].message, status: 400 },
				{ status: 400 }
			);
		}
		return login(schema.data);
	} catch (error) {
		throw error;
	}
}

type ActionType = typeof action;

export async function loader({ request }: LoaderFunctionArgs) {
	const session = await getSession(request.headers.get("Cookie"));

	if (session.has("userId")) {
		// Redirect to the home page if they are already signed in.
		return redirect("/");
	}

	const data: { error: string } = { error: session.get("error") };

	return json(data, {
		headers: {
			"Set-Cookie": await commitSession(session),
		},
	});
}

type LoaderType = typeof loader;
