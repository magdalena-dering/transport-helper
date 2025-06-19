'use client'
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
    authority: `https://cognito-idp.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID}`,
    client_id: process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID || "",
    redirect_uri: process.env.NEXT_PUBLIC_AWS_REDIRECT_URI || "http://localhost:3000",
    response_type: "code",
    scope: process.env.NEXT_PUBLIC_AWS_COGNITO_SCOPE || "email openid phone",
};

export const CognitoAuthProvider = ({ children }: { children: React.ReactNode }) => <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>


