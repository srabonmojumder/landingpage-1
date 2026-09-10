import '@/styles/globals.scss';

export const metadata = {
  title: 'সুরমা ভ্যালি চা (Surma Valley Tea) | এক্সপোর্ট কোয়ালিটি অর্গানিক চা',
  description:
    'সুরমা ভ্যালি প্রিমিয়াম এক্সপোর্ট কোয়ালিটি চা - খাঁটি ন্যাচারাল ফ্লেভার, আকর্ষণীয় অ্যারোমা ও দুর্দান্ত স্বাদ। ১০০% অর্গানিক ও ফ্রেশ চা পাতা।',
  keywords:
    'সুরমা ভ্যালি চা, Surma Valley Tea, Organic Tea Bangladesh, Sreemangal Sylhet Tea, Export Quality Black Tea, Green Tea',
  openGraph: {
    title: 'সুরমা ভ্যালি চা | এক্সপোর্ট কোয়ালিটি অর্গানিক চা',
    description: 'খাঁটি ন্যাচারাল ফ্লেভার ও দুর্দান্ত স্বাদ। ক্যাশ অন ডেলিভারি সুবিধা।',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
