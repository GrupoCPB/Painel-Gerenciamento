/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function Icon({ source, width = 14, height = 14 }:any) {
    return (
        <Image src={source} alt='icon' width={width} height={height}></Image>
    )
}