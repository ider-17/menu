import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
// const menu = [
//   {
//     category: "SALADS",
//     items: [
//       { name: "CHICKEN CAESAR SALAD", tailbar: "Served with Sundried tomatoes, chunky garlic croutons and grilled Chicken", price: "24,900₮" },
//       { name: "GREEK SALAD", tailbar: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.", price: "21,900₮" },
//       { name: "QUINOA POWER SALAD", tailbar: "A healthy mix of quinoa, avocado, roasted sweet potatoes, and kale with a tangy lemon dressing.", price: "22,500₮" },
//     ],
//   },
//   {
//     category: "BURGERS",
//     items: [
//       { name: "CLASSIC BURGER", tailbar: "Juicy beef patty, cheddar cheese, lettuce, tomato, and house-made sauce, served with fries.", price: "18,900₮" },
//       { name: "BBQ BACON BURGER", tailbar: "Beef patty topped with crispy bacon, BBQ sauce, cheddar, and onion rings.", price: "21,900₮" },
//       { name: "VEGAN BLACK BEAN BURGER", tailbar: "Homemade black bean patty, avocado, lettuce, tomato, and vegan mayo, served on a whole-grain bun.", price: "17,900₮" },
//     ],
//   },
//   {
//     category: "PASTA",
//     items: [
//       { name: "SPAGHETTI PASTA", tailbar: "Classic Italian pasta with creamy egg sauce, Parmesan cheese, and crispy pancetta.", price: "20,900₮" },
//       { name: "SEAFOOD MARINARA", tailbar: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.", price: "23,500₮" },
//       { name: "PESTO CHICKEN PASTA", tailbar: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.", price: "21,000₮" },
//     ],
//   },
//   {
//     category: "PIZZA",
//     items: [
//       { name: "MARGHERITA PIZZA", tailbar: "Simple and classic with tomato sauce, fresh mozzarella, and basil leaves.", price: "30,900₮" },
//       { name: "PEPPERONI FEAST", tailbar: "Loaded with pepperoni and melted mozzarella on a crispy crust.", price: "34,500₮" },
//       { name: "VEGETARIAN DELIGHT", tailbar: "Topped with bell peppers, mushrooms, olives, onions, and fresh tomatoes.", price: "29,900₮" },
//     ],
//   },
// ];