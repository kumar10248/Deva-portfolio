"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatDate } from "../../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./Container";
import { Heading } from "./Heading";
import Link from "next/link";
import { Paragraph } from "./Paragraph";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: any) {
  let router = useRouter();

  return (
    <Container>
      <article className="bg-white dark:bg-gray-900 mobile-safe">
        <header className="flex flex-col mobile-safe">
          <Link
            type="button"
            href="/blog"
            aria-label="Go back to articles"
            className="group mb-6 md:mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-zinc-100/5 transition hover:shadow-lg"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 dark:stroke-zinc-400 transition group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-200" />
          </Link>

          <Heading className="py-3 md:py-4 text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-gray-100">{meta.title}</Heading>
          <time
            dateTime={meta.date}
            className="flex items-center text-sm md:text-base mb-4 md:mb-6"
          >
            <Paragraph className="text-gray-600 dark:text-gray-400">
              {formatDate(meta.date)}
            </Paragraph>
          </time>
          <div className="w-full mt-3 md:mt-4 bg-gray-100 dark:bg-gray-800 rounded-lg md:rounded-xl overflow-hidden shadow-lg mobile-safe">
            <Image
              src={meta.image}
              alt="thumbnail"
              height="900"
              width="900"
              className={`object-cover w-full h-auto max-h-48 sm:max-h-56 md:max-h-72 lg:max-h-80`}
            />
          </div>
        </header>
        <Prose className="mt-8 md:mt-12 pb-8 md:pb-12 mobile-safe">{children}</Prose>
      </article>
    </Container>
  );
}
