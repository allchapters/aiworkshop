
export default function HumainBrand({ className = "" }: { className?: string }) {
    return (
        <span className={`inline-flex items-center gap-[1px] ${className}`}>
            {/* Stylized H */}
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block relative -top-[0.05em]"
            >
                <path d="M4 4V20" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                <path d="M20 4V20" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                <path d="M4 10H20" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                <path d="M4 14H20" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
            </svg>
            <span>UMAIN</span>
        </span>
    );
}
