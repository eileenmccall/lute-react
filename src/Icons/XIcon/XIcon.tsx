interface IconProps {
    height: number;
    width: number;
    fill: string;
}

export default function XIcon () {
    return (
        <svg 
            width="11" 
            height="10" 
            viewBox="0 0 11 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M9.99915 2.22168L7.7771 0L5.14209 2.63477L2.50793 0.000976562L0.285889 2.22363L2.91992 4.85742L0 7.77734L2.22205 9.99902L5.14185 7.0791L8.06299 10L10.285 7.77832L7.36389 4.85742L9.99915 2.22168Z" 
                fill="black"
            />
        </svg>
    )
}