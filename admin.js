document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('upload-form');
    const categorySelect = document.getElementById('video-category');
    const subcategorySelect = document.getElementById('video-subcategory');

    const subcategories = {
        movies: ['comedy', 'horror', 'new', 'old', 'foreign'],
        cartoons: [],
        sports: ['matches', 'live']
    };

    categorySelect.addEventListener('change', function() {
        const category = this.value;
        subcategorySelect.innerHTML = '<option value="">اختر التصنيف الفرعي</option>';
        
        if (subcategories[category]) {
            subcategories[category].forEach(sub => {
                const option = document.createElement('option');
                option.value = sub;
                option.textContent = sub;
                subcategorySelect.appendChild(option);
            });
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const videoData = {
            id: Date.now(), // استخدام الوقت الحالي كمعرف فريد
            title: document.getElementById('video-title').value,
            url: document.getElementById('video-url').value,
            description: document.getElementById('video-description').value,
            category: categorySelect.value,
            subcategory: subcategorySelect.value
        };

        // حفظ بيانات الفيديو في localStorage
        let videos = JSON.parse(localStorage.getItem('videos')) || [];
        videos.push(videoData);
        localStorage.setItem('videos', JSON.stringify(videos));

        alert('تم رفع الفيديو بنجاح!');
        form.reset();
    });
});