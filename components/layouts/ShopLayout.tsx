import Head from "next/head"

interface IShopLayoutProps {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: React.ReactNode;
}

const ShopLayout = ({ title, pageDescription, imageFullUrl, children }: IShopLayoutProps) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={pageDescription} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={pageDescription} />
            {
                imageFullUrl && <meta name="og:image" content={imageFullUrl} />
            }
        </Head>
        <nav>
            {/* TODO: navbar */}
        </nav>
        {/* TODO: sidebar */}

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0 30px'
        }}>
            {children}
        </main>

        <footer>
            {/* TODO: custom footer */}
        </footer>
    </>
  )
}

export default ShopLayout