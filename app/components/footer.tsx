export function Footer({ children }: React.PropsWithChildren<{}>) {
  return (
    <footer>
      <a
        target="_blank"
        href="https://chatg.pt/weather"
        aria-label="Vercel"
        rel="noreferrer"
        className="vercel"
      >
        <svg
          width="106"
          height="24"
          viewBox="0 0 106 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M13.875 0L27.75 24H0L13.875 0Z" fill="var(--fg)" />
          <path
            d="M59.85 12.75C59.85 8.8875 57 6.1875 52.9125 6.1875C48.825 6.1875 45.975 8.8875 45.975 12.75C45.975 16.5375 49.05 19.3125 53.2875 19.3125C55.6125 19.3125 57.7125 18.45 59.0625 16.875L56.5125 15.4125C55.725 16.2 54.5625 16.6875 53.2875 16.6875C51.4125 16.6875 49.8 15.675 49.2375 14.1375L49.125 13.875H59.7375C59.8125 13.5 59.85 13.125 59.85 12.75ZM49.0875 11.625L49.1625 11.4C49.65 9.7875 51.075 8.8125 52.875 8.8125C54.7125 8.8125 56.1 9.7875 56.5875 11.4L56.6625 11.625H49.0875Z"
            fill="var(--fg)"
          />
          <path
            d="M100.238 12.75C100.238 8.8875 97.3875 6.1875 93.3 6.1875C89.2125 6.1875 86.3625 8.8875 86.3625 12.75C86.3625 16.5375 89.4375 19.3125 93.675 19.3125C96 19.3125 98.1 18.45 99.45 16.875L96.9 15.4125C96.1125 16.2 94.95 16.6875 93.675 16.6875C91.8 16.6875 90.1875 15.675 89.625 14.1375L89.5125 13.875H100.125C100.2 13.5 100.238 13.125 100.238 12.75ZM89.475 11.625L89.55 11.4C90.0375 9.7875 91.4625 8.8125 93.2625 8.8125C95.1 8.8125 96.4875 9.7875 96.975 11.4L97.05 11.625H89.475Z"
            fill="var(--fg)"
          />
          <path
            d="M82.2375 10.6125L84.7875 9.14999C83.5875 7.27499 81.45 6.22499 78.8625 6.22499C74.775 6.22499 71.925 8.92499 71.925 12.7875C71.925 16.65 74.775 19.35 78.8625 19.35C81.45 19.35 83.5875 18.3 84.7875 16.425L82.2375 14.9625C81.5625 16.0875 80.3625 16.725 78.8625 16.725C76.5 16.725 74.925 15.15 74.925 12.7875C74.925 10.425 76.5 8.84999 78.8625 8.84999C80.325 8.84999 81.5625 9.48749 82.2375 10.6125Z"
            fill="var(--fg)"
          />
          <path d="M105.863 2.1H102.862V18.975H105.863V2.1Z" fill="var(--fg)" />
          <path
            d="M48.1875 2.1H44.7375L38.1375 13.5L31.5375 2.1H28.05L38.1375 19.5L48.1875 2.1Z"
            fill="var(--fg)"
          />
          <path
            d="M69.4125 9.675C69.75 9.675 70.0875 9.7125 70.425 9.7875V6.6C67.875 6.675 65.475 8.1 65.475 9.8625V6.6H62.475V18.975H65.475V13.6125C65.475 11.2875 67.0875 9.675 69.4125 9.675Z"
            fill="var(--fg)"
          />
        </svg>
      </a>

      <div className="details">
        <p>
          Built with{" "}
          <a target="_blank" href="https://nextjs.org" rel="noreferrer">
            Next.js
          </a>{" "}
          on{" "}
          <a target="_blank" href="https://vercel.com" rel="noreferrer">
            Vercel
          </a>
        </p>
        {children}
      </div>

      <a
        target="_blank"
        href="https://github.com/jkalbasri/weather-ai-qawin"
        className="source"
        rel="noreferrer"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21226 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21226 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"
            fill="var(--fg)"
          />
        </svg>
        Source
      </a>
    </footer>
  );
}
