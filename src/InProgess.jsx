export default function InProgress() {
	return (
		<div
			class="fixed top-0 m-auto flex w-full items-center justify-center bg-emerald-400/20 p-2 leading-none text-neutral-200 lg:inline-flex lg:rounded-full backdrop-blur-sm"
			role="alert"
		>
			<span class="mr-3 flex rounded-full bg-emerald-800 p-1 text-3xl font-bold uppercase">
				<p>🧩</p>
			</span>
			<span class="mr-2 flex-auto text-left font-semibold">
				This website is a work in progress
			</span>
			<svg
				class="h-4 w-4 fill-current opacity-75"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
			</svg>
		</div>
	);
}
