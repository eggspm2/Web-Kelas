import { useEffect, useState } from "react";
import BorderStruktur from "../components/BorderStruktur";
import AOS from "aos";
import "aos/dist/aos.css";

const StrukturKelas = () => {
	const [aosLoaded, setAosLoaded] = useState(false);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
		setAosLoaded(true);
	}, []); // Run once on mount

	return (
		<div className="z-1 relative h-auto lg:overflow-hidden">
			{/* wali kelas */}
			<div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10">
				<BorderStruktur Jabatan="Wali Kelas" Nama="Sir Adi Kurniawan S.Pd" Width="150px" />
			</div>
			<div className="flex flex-col justify-center items-center">
				<img src="LineVertikal.svg" alt="Vertical Line" data-aos="fade-up" data-aos-duration="550" />

				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt="Horizontal Line"
						className="relative top-[-1rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt="Horizontal Line"
						className="relative top-[-1rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt="Horizontal Line"
						className="relative top-[-1rem] hidden lg:flex lg:w-[4.2rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				{/* Additional Content */}
				{/* ... (rest of the code remains unchanged, just ensure to add meaningful alt text for all images) */}

				{/* Example of fixing a typo */}
				<div className="flex gap-[5rem] relative top-[-18.5rem] lg:gap-[17.5rem]" data-aos="fade-up" data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="" Nama="Bagas" Width="120px" />
						<div className="py-[3%]"></div>
						<BorderStruktur Jabatan="" Nama="Aden" Width="120px" />
					</div>
					{/* ... (rest of the code remains unchanged) */}
				</div>
			</div>
		</div>
	);
}

export default StrukturKelas;
