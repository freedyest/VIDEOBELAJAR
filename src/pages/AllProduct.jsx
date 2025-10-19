import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import NavButton from "../components/NavButton.jsx";
import VideoCard from "../components/VideoCard.jsx";
import FilterNav from "../components/FilterNav.jsx";
import CourseModal from "../components/CourseModal.jsx";
import FilterSidebar from "../components/FilterSideBar.jsx";
import SearchCourse from "../components/SearchCourse.jsx";
import SortCourse from "../components/FilterSort.jsx";
import {
  fetchCourses,
  setFilterSort,
  openModal,
  closeModal,
  addCourse,
  editCourse,
  removeCourse,
  setSidebarFilter,
} from "../slices/courseSlices.js";
import Sort from "../components/FilterSort.jsx";

function AllProduct() {
  const dispatch = useDispatch();
  const { list, filter, isModalOpen, sidebarFilter, editingCourse, search } =
    useSelector((state) => state.courses);

  const storedUser = localStorage.getItem("currentUser");
  const currentUser = storedUser ? JSON.parse(storedUser) : null;

  // load data awal
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);
  // filtered + sorted courses
  const { sort } = useSelector((state) => state.courses); // ambil state sort juga

  const filteredCourses = list.filter((course) => {
    // FilterNav
    const matchNav = filter === "all" || course.category === filter;

    // FilterSidebar
    const matchBidang =
      sidebarFilter.bidang.length === 0 ||
      sidebarFilter.bidang.includes(course.category.toLowerCase());

    const matchHarga =
      sidebarFilter.harga.length === 0 ||
      sidebarFilter.harga.some((range) => {
        return course.price >= range.min && course.price <= range.max;
      });

    const matchDurasi =
      sidebarFilter.durasi.length === 0 ||
      sidebarFilter.durasi.some((durasi) => {
        return course.duration >= durasi.min && course.duration <= durasi.max;
      });

    // 🔍 search filter
    const matchSearch =
      search.trim() === "" ||
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.desc.toLowerCase().includes(search.toLowerCase());

    return matchNav && matchBidang && matchHarga && matchDurasi && matchSearch;
  });

  // 🧠 Sorting logic
  const sortedCourses = [...filteredCourses];
  if (sort === "harga_asc") {
    sortedCourses.sort((a, b) => a.price - b.price);
  } else if (sort === "harga_desc") {
    sortedCourses.sort((a, b) => b.price - a.price);
  } else if (sort === "nama_asc") {
    sortedCourses.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "nama_desc") {
    sortedCourses.sort((a, b) => b.title.localeCompare(a.title));
  }

  // handler
  const handleCreate = () => dispatch(openModal(null));
  const handleEdit = (course) => dispatch(openModal(course));

  const handleSave = (course) => {
    if (editingCourse) {
      dispatch(editCourse({ id: editingCourse.id, data: course }));
    } else {
      dispatch(addCourse(course));
    }
    dispatch(closeModal());
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin mau hapus course ini?")) {
      dispatch(removeCourse(id));
    }
  };

  const handleFilterChange = (data) => {
    dispatch(setSidebarFilter(data));
  };
  const categories = [
    { key: "all", label: "Semua Kelas" },
    { key: "pemasaran", label: "Pemasaran" },
    { key: "desain", label: "Desain" },
    { key: "pengembangan", label: "Pengembangan Diri" },
    { key: "bisnis", label: "Bisnis" },
  ];

  return (
    <div>
      <div className="px-2 md:px-20 bg-[#FFFDF3]">
        {/* header */}
        <Header withUserMenu={true} />

        {/* headmenu */}
        <section id="headmenu" className="pt-12 mt-20 bg-lightgray px-2 ">
          <div className="w-full">
            <h2 className="text-black text-3xl font-bold">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="text-[#333333AD] text-lg font-semibold mt-3">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>
        </section>
        <div className="w-full">
          <div>
            {/* filter nav */}
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>
          <div>
            <SortCourse />
            <SearchCourse />
          </div>
          <div>
            {/* tombol create → hanya muncul kalau ada user login */}
            {currentUser?.email && (
              <div className="my-6">
                <button
                  onClick={handleCreate}
                  className="px-4 py-2 bg-[#F64920] font-semibold text-white rounded hover:bg-white hover:text-[#F64920]"
                >
                  + Create Course
                </button>
              </div>
            )}

            {/* video course */}
            <section id="videocourse" className="w-full mt-10">
              <div className="w-full md:flex flex-wrap justify-evenly gap-6">
                {sortedCourses.map((course) => (
                  <VideoCard
                    key={course.id}
                    image={course.image}
                    title={course.title}
                    description={course.desc}
                    avatar={course.avatar}
                    name={course.instructor}
                    role={course.role}
                    company={course.company}
                    rating={course.rating}
                    review={course.reviews}
                    price={course.price}
                    onEdit={currentUser ? () => handleEdit(course) : null}
                    onDelete={
                      currentUser ? () => handleDelete(course.id) : null
                    }
                  />
                ))}
              </div>
            </section>

            {/* newsletter */}
            <section id="newsletter" className=" bg-black">
              <div className="relative w-full h-auto flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}newsletter.jpg`}
                  alt="Spotlight"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/80 z-1"></div>
                <div className="py-12 md:w-2/5 relative z-20 text-white text-center px-4">
                  <h5 className="text-xl  text-lightgray mb-2">NEWSLETTER</h5>
                  <h3 className="text-2xl font-bold mb-2">
                    Mau Belajar Lebih Banyak?
                  </h3>
                  <p className="text-lg">
                    Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                    penawaran spesial dari program-program terbaik
                    videobelajar.id
                  </p>
                  <div className="flex justify-center mt-10">
                    <div className="flex justify-center flex-wrap md:relative md:w-80">
                      <input
                        type="text"
                        className="placeholder:text-center bg-white md:placeholder:text-start w-full p-2 md:pr-24 rounded-lg text-black placeholder:text-gray-500 border border-gray-300"
                        placeholder="Masukkan emailmu"
                      />
                      <button className="justify-center flex w-full mt-6 md:w-auto md:m-0 md:absolute md:top-1/2 md:right-1 md:-translate-y-1/2 bg-yellow-500 px-3 py-1 rounded-lg font-bold text-white">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />

      {/* modal */}
      <CourseModal
        isOpen={isModalOpen}
        onClose={() => dispatch(closeModal())}
        onSave={handleSave}
        initialData={editingCourse}
      />
    </div>
  );
}

export default AllProduct;
