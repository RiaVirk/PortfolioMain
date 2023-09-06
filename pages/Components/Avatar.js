import Image from "next/image";

const Avatar = () => {
    return (
        <div className="hidden xl:flex xl:max-w-none">
            <Image src={'/avatar2.png'} width={500} height={600} alt="" className="mix-blend-screen h-full" />
            {/* translate-z-o w-full */}
        </div>
    );
}

export default Avatar;

