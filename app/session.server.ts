import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
	createCookieSessionStorage({
		cookie: {
			name: "__session",
			httpOnly: true,
			maxAge: 30 * 24 * 60 * 60,
			sameSite: "lax",
			secrets: [process.env.SECURE_SECRET!],
			secure: process.env.NODE_ENV === "production",
		},
	});

export { getSession, commitSession, destroySession };
