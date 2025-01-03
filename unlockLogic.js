const course = {
    id: "course1",
    title: "JavaScript Basics",
    lectures: [
        { id: "lecture1", title: "Introduction", completed: false },
        { id: "lecture2", title: "Variables and Types", completed: false },
        { id: "lecture3", title: "Functions", completed: false }
    ]
};

function renderLectures(course) {
    const list = document.getElementById("lectureList");
    list.innerHTML = "";

    course.lectures.forEach((lecture, index) => {
        const li = document.createElement("li");
        li.textContent = lecture.title;
        li.style.color = lecture.completed || index === 0 || course.lectures[index - 1].completed ? "black" : "gray";
        li.onclick = () => markComplete(course, lecture.id);
        list.appendChild(li);
    });
}

function markComplete(course, lectureId) {
    const lecture = course.lectures.find(l => l.id === lectureId);
    if (lecture) {
        lecture.completed = true;
        renderLectures(course);
    }
}

renderLectures(course);
