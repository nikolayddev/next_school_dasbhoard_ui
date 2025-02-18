export default function DasbhoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>dashboard{children}</div>
    );
}