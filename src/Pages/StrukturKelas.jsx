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
	}, []);

	// Data nama dan jabatan
	const members = [
		{ Jabatan: "Wali Kelas", Nama: "Sir Adi Kurniawan S.Pd", Width: "150px" },
		{ Jabatan: "Ketua Kelas", Nama: "Hasbi", Width: "120px" },
		{ Jabatan: "Wakil Ketua", Nama: "Gebran", Width: "120px" },
		{ Jabatan: "Sekretaris", Nama: "Valiant", Width: "120px" },
		{ Jabatan: "Bendahara", Nama: "Masayu", Width: "120px" },
		// Tambahkan semua anggota kelas di sini
		{ Jabatan: "", Nama: "Bagas", Width: "120px" },
		{ Jabatan: "", Nama: "Aden", Width: "120px" },
		// ... (tambahkan anggota lainnya)
	];

	return (
		<div className="z-1 relative h-auto lg:overflow-hidden">
			{/* Wali Kelas */}
			<div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10">
				<BorderStruktur Jabatan={members[0].Jabatan} Nama={members[0].Nama} Width={members[0].Width} />
			</div>
			<div className="flex flex-col justify-center items-center">
				<img src="LineVertikal.svg" alt="Garis Vertikal" data-aos="fade-up" data-aos-duration="550" />

				{/* Menampilkan semua anggota kelas */}
				{members.map((member, index) => (
					<div key={index} data-aos="fade-up" data-aos-duration={(index + 1) * 100}>
						<BorderStruktur Jabatan={member.Jabatan} Nama={member.Nama} Width={member.Width} />
					</div>
				))}

				{/* Tambahkan elemen lain seperti garis, lingkaran, dll. */}
			</div>
		</div>
	);
}

export default StrukturKelas;
