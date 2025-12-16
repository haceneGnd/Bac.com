// ========== إعدادات الموقع ==========
// إحداثيات تاجنانت، ميلة، الجزائر
const TAJNANET_COORDS = {
    latitude: 36.4644,   // خط العرض
    longitude: 6.2621,   // خط الطول
    timezone: 1,         // التوقيت (+1 بتوقيت وسط أوروبا)
    elevation: 420       // الارتفاع عن سطح البحر (متر)
};

// إعدادات الحساب
const CALC_METHOD = 'Algeria';  // طريقة حساب الجزائر

// بيانات مواقيت الصلاة
let prayerTimes = {};
let currentDate = new Date();

// بيانات الجدول الأسبوعي
const weeklySchedule = [
    {
        day: 'السبت',
        time: '05:30 - 06:15',
        subject: 'مواد ثانوية',
        type: 'other',
        activity: 'حفظ + تلخيص',
        reserved: false
    },
    {
        day: 'السبت',
        time: '14:30 - 16:30',
        subject: 'رياضيات',
        type: 'math',
        activity: 'فهم الدروس + تمارين',
        reserved: false
    },
    {
        day: 'السبت',
        time: '17:00 - 18:00',
        subject: 'علوم/لغات',
        type: 'science',
        activity: 'تمارين خفيفة',
        reserved: false
    },
    {
        day: 'السبت',
        time: '19:00 - 21:00',
        subject: 'رياضيات/فيزياء',
        type: 'math',
        activity: 'حل بكالوريات سابقة',
        reserved: false
    },
    {
        day: 'الأحد',
        time: '05:30 - 06:15',
        subject: 'مواد ثانوية',
        type: 'other',
        activity: 'حفظ + تلخيص',
        reserved: false
    },
    {
        day: 'الأحد',
        time: '14:30 - 16:30',
        subject: 'فيزياء',
        type: 'physics',
        activity: 'فهم الدروس + تمارين',
        reserved: false
    },
    {
        day: 'الأحد',
        time: '17:00 - 18:00',
        subject: 'علوم/لغات',
        type: 'science',
        activity: 'تمارين خفيفة',
        reserved: false
    },
    {
        day: 'الأحد',
        time: '18:30 - 21:30',
        subject: 'فترة محجوزة',
        type: 'reserved',
        activity: 'صلاة + راحة',
        reserved: true
    },
    {
        day: 'الاثنين',
        time: '05:30 - 06:15',
        subject: 'مواد ثانوية',
        type: 'other',
        activity: 'حفظ + تلخيص',
        reserved: false
    },
    {
        day: 'الاثنين',
        time: '14:30 - 16:30',
        subject: 'رياضيات',
        type: 'math',
        activity: 'فهم الدروس + تمارين',
        reserved: false
    },
    {
        day: 'الاثنين',
        time: '17:00 - 18:00',
        subject: 'علوم/لغات',
        type: 'science',
        activity: 'تمارين خفيفة',
        reserved: false
    },
    {
        day: 'الاثنين',
        time: '18:30 - 21:30',
        subject: 'فترة محجوزة',
        type: 'reserved',
        activity: 'صلاة + راحة',
        reserved: true
    },
    {
        day: 'الثلاثاء',
        time: '05:30 - 06:15',
        subject: 'مواد ثانوية',
        type: 'other',
        activity: 'حفظ + تلخيص',
        reserved: false
    },
    {
        day: 'الثلاثاء',
        time: '14:30 - 16:30',
        subject: 'فيزياء',
        type: 'physics',
        activity: 'فهم الدروس + تمارين',
        reserved: false
    },
    {
        day: 'الثلاثاء',
        time: '17:00 - 18:00',
        subject: 'علوم/لغات',
        type: 'science',
        activity: 'تمارين خفيفة',
        reserved: false
    },
    {
        day: 'الثلاثاء',
        time: '19:00 - 21:00',
        subject: 'رياضيات/فيزياء',
        type: 'physics',
        activity: 'حل بكالوريات سابقة',
        reserved: false
    },
    {
        day: 'الأربعاء',
        time: '05:30 - 06:15',
        subject: 'مواد ثانوية',
        type: 'other',
        activity: 'حفظ + تلخيص',
        reserved: false
    },
    {
        day: 'الأربعاء',
        time: '14:30 - 16:30',
        subject: 'رياضيات',
        type: 'math',
        activity: 'فهم الدروس + تمارين',
        reserved: false
    },
    {
        day: 'الأربعاء',
        time: '17:00 - 18:00',
        subject: 'علوم/لغات',
        type: 'science',
        activity: 'تمارين خفيفة',
        reserved: false
    },
    {
        day: 'الأربعاء',
        time: '18:30 - 21:30',
        subject: 'فترة محجوزة',
        type: 'reserved',
        activity: 'صلاة + راحة',
        reserved: true
    },
    {
        day: 'الخميس',
        time: '05:30 - 06:15',
        subject: 'مواد ثانوية',
        type: 'other',
        activity: 'حفظ + تلخيص',
        reserved: false
    },
    {
        day: 'الخميس',
        time: '14:30 - 16:30',
        subject: 'فيزياء',
        type: 'physics',
        activity: 'فهم الدروس + تمارين',
        reserved: false
    },
    {
        day: 'الخميس',
        time: '17:00 - 18:00',
        subject: 'علوم/لغات',
        type: 'science',
        activity: 'تمارين خفيفة',
        reserved: false
    },
    {
        day: 'الخميس',
        time: '19:00 - 21:00',
        subject: 'رياضيات/فيزياء',
        type: 'math',
        activity: 'حل بكالوريات سابقة',
        reserved: false
    },
    {
        day: 'الجمعة',
        time: '10:00 - 12:00',
        subject: 'مراجعة',
        type: 'other',
        activity: 'مراجعة أخطاء الأسبوع + اختبار قصير',
        reserved: false
    }
];

// بيانات المهام
let tasks = [
    { id: 1, text: 'حل تمارين الرياضيات ص 45-50', subject: 'math', completed: false },
    { id: 2, text: 'مراجعة دروس الفيزياء الفصل 3', subject: 'physics', completed: true },
    { id: 3, text: 'حفظ مصطلحات العلوم', subject: 'science', completed: false },
    { id: 4, text: 'تلخيص درس الفلسفة', subject: 'other', completed: false },
    { id: 5, text: 'حل نموذج بكالوريا 2020', subject: 'math', completed: false }
];

// عناصر المؤقت
let timerInterval;
let minutes = 45;
let seconds = 0;
let timerRunning = false;

// ========== تهيئة الموقع ==========
document.addEventListener('DOMContentLoaded', function() {
    // تحديث الوقت والتاريخ
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // حساب مواقيت الصلاة
    calculatePrayerTimes();
    
    // عرض مواقيت الصلاة
    displayPrayerTimes();
    
    // تحديث تنبيه الصلاة القادمة
    updateNextPrayer();
    setInterval(updateNextPrayer, 1000); // كل ثانية
    
    // تهيئة الجدول الأسبوعي
    renderSchedule('all');
    
    // تهيئة المهام
    renderTasks('all');
    
    // تهيئة أشرطة التقدم
    initProgressBars();
    
    // إضافة المستمعين للأحداث
    setupEventListeners();
    
    // تهيئة التنقل المتنقل
    setupMobileNavigation();
    
    // تحديث حالة المؤقت
    updateTimerDisplay();
    
    // تحديث الفترات المحجوزة حسب وقت المغرب
    updateReservedTimes();
    
    // تحديث آخر تحديث
    document.getElementById('lastUpdate').textContent = 
        new Date().toLocaleTimeString('ar-EG', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    
    // طلب إذن الإشعارات
    requestNotificationPermission();
});

// ========== مواقيت الصلاة ==========
function calculatePrayerTimes(date = currentDate) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // حساب مواقيت الصلاة الدقيقة لتاجنانت حسب الفصول
    let baseTimes;
    
    if (month >= 3 && month <= 5) { // الربيع
        baseTimes = {
            fajr: '04:45',
            sunrise: '06:15',
            dhuhr: '12:45',
            asr: '16:30',
            maghrib: '19:15',
            isha: '20:45'
        };
    } else if (month >= 6 && month <= 8) { // الصيف
        baseTimes = {
            fajr: '03:30',
            sunrise: '05:15',
            dhuhr: '12:50',
            asr: '16:45',
            maghrib: '19:45',
            isha: '21:15'
        };
    } else if (month >= 9 && month <= 11) { // الخريف
        baseTimes = {
            fajr: '05:00',
            sunrise: '06:30',
            dhuhr: '12:30',
            asr: '15:45',
            maghrib: '18:30',
            isha: '20:00'
        };
    } else { // الشتاء
        baseTimes = {
            fajr: '06:15',
            sunrise: '07:45',
            dhuhr: '12:30',
            asr: '15:15',
            maghrib: '17:30',
            isha: '19:00'
        };
    }
    
    // تعديل طفيف حسب اليوم في الشهر (تقريب 1.5 دقيقة لكل يوم)
    const dayAdjustment = (day - 15) * 1.5;
    
    prayerTimes = {};
    Object.keys(baseTimes).forEach(key => {
        const [h, m] = baseTimes[key].split(':').map(Number);
        const totalMinutes = h * 60 + m + dayAdjustment;
        const newHours = Math.floor(totalMinutes / 60) % 24;
        const newMinutes = Math.round(totalMinutes % 60);
        prayerTimes[key] = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
    });
    
    // حفظ في localStorage
    savePrayerTimesToStorage(date);
}

function savePrayerTimesToStorage(date) {
    const dateKey = date.toISOString().split('T')[0];
    const data = {
        times: prayerTimes,
        calculatedAt: new Date().toISOString(),
        location: 'تاجنانت، ميلة، الجزائر'
    };
    
    localStorage.setItem(`prayerTimes_${dateKey}`, JSON.stringify(data));
}

function displayPrayerTimes() {
    const container = document.querySelector('.prayer-times-grid');
    if (!container) return;
    
    const prayers = [
        { name: 'الفجر', key: 'fajr', icon: 'fas fa-sun' },
        { name: 'الشروق', key: 'sunrise', icon: 'fas fa-sunrise' },
        { name: 'الظهر', key: 'dhuhr', icon: 'fas fa-sun' },
        { name: 'العصر', key: 'asr', icon: 'fas fa-cloud-sun' },
        { name: 'المغرب', key: 'maghrib', icon: 'fas fa-sunset' },
        { name: 'العشاء', key: 'isha', icon: 'fas fa-moon' }
    ];
    
    container.innerHTML = '';
    
    prayers.forEach(prayer => {
        const isCurrent = isCurrentPrayer(prayer.key);
        const isPassed = isPrayerPassed(prayer.key);
        
        const card = document.createElement('div');
        card.className = `prayer-time-card ${prayer.key} ${isCurrent ? 'current' : ''} ${isPassed ? 'passed' : ''}`;
        
        card.innerHTML = `
            <div class="prayer-icon">
                <i class="${prayer.icon}"></i>
            </div>
            <div class="prayer-name">${prayer.name}</div>
            <div class="prayer-time">${prayerTimes[prayer.key] || '--:--'}</div>
            ${isCurrent ? '<div class="prayer-remaining">الصلاة الحالية</div>' : ''}
        `;
        
        container.appendChild(card);
    });
    
    // تحديث التاريخ الهجري
    updateHijriDate();
}

function isCurrentPrayer(prayerKey) {
    const now = new Date();
    const prayersOrder = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
    const currentIndex = prayersOrder.indexOf(prayerKey);
    
    if (currentIndex === -1) return false;
    
    const prayerTimeStr = prayerTimes[prayerKey];
    if (!prayerTimeStr) return false;
    
    const [hours, minutes] = prayerTimeStr.split(':').map(Number);
    const prayerTime = new Date();
    prayerTime.setHours(hours, minutes, 0, 0);
    
    let nextPrayerTime;
    if (currentIndex < prayersOrder.length - 1) {
        const nextPrayerKey = prayersOrder[currentIndex + 1];
        const nextTimeStr = prayerTimes[nextPrayerKey];
        if (nextTimeStr) {
            const [nextHours, nextMinutes] = nextTimeStr.split(':').map(Number);
            nextPrayerTime = new Date();
            nextPrayerTime.setHours(nextHours, nextMinutes, 0, 0);
        }
    }
    
    if (nextPrayerTime) {
        return now >= prayerTime && now < nextPrayerTime;
    }
    
    if (prayerKey === 'isha') {
        const fajrTimeStr = prayerTimes.fajr;
        if (fajrTimeStr) {
            const [fajrHours, fajrMinutes] = fajrTimeStr.split(':').map(Number);
            const fajrTime = new Date();
            fajrTime.setHours(fajrHours, fajrMinutes, 0, 0);
            fajrTime.setDate(fajrTime.getDate() + 1);
            return now >= prayerTime || now < fajrTime;
        }
    }
    
    return false;
}

function isPrayerPassed(prayerKey) {
    const now = new Date();
    const prayerTimeStr = prayerTimes[prayerKey];
    
    if (!prayerTimeStr) return false;
    
    const [hours, minutes] = prayerTimeStr.split(':').map(Number);
    const prayerTime = new Date();
    prayerTime.setHours(hours, minutes, 0, 0);
    
    return now > prayerTime && !isCurrentPrayer(prayerKey);
}

function updateNextPrayer() {
    const now = new Date();
    const prayers = [
        { name: 'الفجر', key: 'fajr', time: prayerTimes.fajr },
        { name: 'الظهر', key: 'dhuhr', time: prayerTimes.dhuhr },
        { name: 'العصر', key: 'asr', time: prayerTimes.asr },
        { name: 'المغرب', key: 'maghrib', time: prayerTimes.maghrib },
        { name: 'العشاء', key: 'isha', time: prayerTimes.isha }
    ];
    
    let nextPrayer = null;
    let minDiff = Infinity;
    
    prayers.forEach(prayer => {
        if (!prayer.time) return;
        
        const [hours, minutes] = prayer.time.split(':').map(Number);
        const prayerTime = new Date();
        prayerTime.setHours(hours, minutes, 0, 0);
        
        if (prayerTime > now) {
            const diff = prayerTime - now;
            if (diff < minDiff) {
                minDiff = diff;
                nextPrayer = prayer;
            }
        }
    });
    
    if (!nextPrayer && prayerTimes.fajr) {
        const [hours, minutes] = prayerTimes.fajr.split(':').map(Number);
        const fajrTime = new Date();
        fajrTime.setHours(hours, minutes, 0, 0);
        fajrTime.setDate(fajrTime.getDate() + 1);
        
        nextPrayer = { name: 'الفجر', key: 'fajr', time: prayerTimes.fajr };
        minDiff = fajrTime - now;
    }
    
    if (nextPrayer) {
        document.getElementById('nextPrayerName').textContent = nextPrayer.name;
        document.getElementById('nextPrayerTime').textContent = nextPrayer.time;
        
        const hoursRemaining = Math.floor(minDiff / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((minDiff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((minDiff % (1000 * 60)) / 1000);
        
        document.getElementById('timeRemaining').textContent = 
            `${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')} متبقي`;
            
        showPrayerAlert(minDiff);
    }
}

function showPrayerAlert(timeDiff) {
    const alertElement = document.getElementById('prayerAlert');
    const minutesDiff = Math.floor(timeDiff / (1000 * 60));
    const alertTime = parseInt(document.getElementById('prayerAlertTime')?.value || 15);
    
    if (minutesDiff <= alertTime && minutesDiff > 0) {
        alertElement.textContent = `تنبيه: الصلاة القادمة خلال ${minutesDiff} دقيقة`;
        alertElement.style.display = 'block';
        
        if (minutesDiff <= 5) {
            playAdhanAlert();
        }
    } else {
        alertElement.style.display = 'none';
    }
}

function playAdhanAlert() {
    console.log('تنبيه: حان وقت الصلاة!');
    
    if (Notification.permission === 'granted' && document.getElementById('prayerNotifications').checked) {
        new Notification('حان وقت الصلاة!', {
            body: 'الرجاء إعداد نفسك للصلاة',
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%234361ee" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></svg>'
        });
    }
}

// ========== الوقت والتاريخ ==========
function updateDateTime() {
    const now = new Date();
    
    const dateStr = now.toLocaleDateString('ar-EG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    document.getElementById('currentDate').textContent = dateStr;
    
    const timeStr = now.toLocaleTimeString('ar-EG', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    document.getElementById('currentTime').textContent = timeStr;
    
    updatePrayerSectionDate();
    updateSessionType();
}

function updatePrayerSectionDate() {
    const dateStr = currentDate.toLocaleDateString('ar-EG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    document.getElementById('prayerDate').textContent = dateStr;
}

function updateHijriDate() {
    const gregorianDate = currentDate;
    const hijriDate = convertToHijri(gregorianDate);
    
    document.getElementById('hijriDate').textContent = hijriDate;
    document.getElementById('prayerHijriDate').textContent = hijriDate;
}

function convertToHijri(gregorianDate) {
    const hijriAdjust = -579;
    const hijriYear = Math.floor((gregorianDate.getFullYear() - hijriAdjust) * 0.97);
    const hijriMonth = gregorianDate.getMonth() + 1;
    const hijriDay = gregorianDate.getDate();
    
    return `${hijriDay}/${hijriMonth}/${hijriYear} هـ`;
}

// ========== إدارة الأيام ==========
function changeDay(days) {
    currentDate.setDate(currentDate.getDate() + days);
    
    calculatePrayerTimes(currentDate);
    displayPrayerTimes();
    updateNextPrayer();
    updatePrayerSectionDate();
    updateHijriDate();
    updateReservedTimes();
}

// ========== الفترات المحجوزة ==========
function updateReservedTimes() {
    const maghribTime = prayerTimes.maghrib;
    if (!maghribTime) return;
    
    const [hours, minutes] = maghribTime.split(':').map(Number);
    const maghribMinutes = hours * 60 + minutes;
    
    const reservedStartMinutes = maghribMinutes + 30;
    const reservedEndMinutes = reservedStartMinutes + 180;
    
    const reservedStartHours = Math.floor(reservedStartMinutes / 60) % 24;
    const reservedStartMins = reservedStartMinutes % 60;
    
    const reservedEndHours = Math.floor(reservedEndMinutes / 60) % 24;
    const reservedEndMins = reservedEndMinutes % 60;
    
    const startTime = `${reservedStartHours.toString().padStart(2, '0')}:${reservedStartMins.toString().padStart(2, '0')}`;
    const endTime = `${reservedEndHours.toString().padStart(2, '0')}:${reservedEndMins.toString().padStart(2, '0')}`;
    
    const reservedItem = document.getElementById('reservedTimeDisplay');
    if (reservedItem) {
        reservedItem.innerHTML = `
            ${startTime} - ${endTime} (صلاة + راحة)
            <br><small>يتم تعديلها تلقائياً حسب وقت صلاة المغرب (${maghribTime})</small>
        `;
    }
}

// ========== المؤقت ==========
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById('startTimer').disabled = true;
        document.getElementById('pauseTimer').disabled = false;
    }
}

function pauseTimer() {
    if (timerRunning) {
        timerRunning = false;
        clearInterval(timerInterval);
        document.getElementById('startTimer').disabled = false;
        document.getElementById('pauseTimer').disabled = true;
    }
}

function resetTimer() {
    pauseTimer();
    minutes = parseInt(document.getElementById('studyDuration').value) || 45;
    seconds = 0;
    updateTimerDisplay();
    document.getElementById('startTimer').disabled = false;
    document.getElementById('pauseTimer').disabled = true;
}

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            alert('انتهت جلسة الدراسة! خذ استراحة قصيرة.');
            resetTimer();
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    
    updateTimerDisplay();
}

function updateTimerDisplay() {
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// ========== الجدول الدراسي ==========
function renderSchedule(dayFilter) {
    const scheduleTable = document.querySelector('.schedule-table');
    if (!scheduleTable) return;
    
    scheduleTable.innerHTML = '';
    
    const dayMap = {
        'saturday': 'السبت',
        'sunday': 'الأحد',
        'monday': 'الاثنين',
        'tuesday': 'الثلاثاء',
        'wednesday': 'الأربعاء',
        'thursday': 'الخميس',
        'friday': 'الجمعة'
    };
    
    const filteredSchedule = weeklySchedule.filter(item => {
        if (dayFilter === 'all') return true;
        return item.day === dayMap[dayFilter];
    });
    
    filteredSchedule.forEach(item => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = `schedule-item ${item.type} ${item.reserved ? 'reserved' : ''}`;
        
        const subjectIcon = getSubjectIcon(item.type);
        const subjectClass = getSubjectClass(item.type);
        
        scheduleItem.innerHTML = `
            <div class="time">
                <i class="fas fa-clock"></i>
                ${item.time}
            </div>
            <div class="subject ${subjectClass}">
                <i class="${subjectIcon}"></i>
                ${item.subject}
            </div>
            <div class="activity">${item.activity}</div>
            <div class="day-badge">${item.day}</div>
        `;
        
        scheduleTable.appendChild(scheduleItem);
    });
}

// ========== المهام ==========
function renderTasks(filter) {
    const taskList = document.querySelector('.task-list');
    if (!taskList) return;
    
    taskList.innerHTML = '';
    
    const filteredTasks = filter === 'all' 
        ? tasks 
        : tasks.filter(task => task.subject === filter);
    
    if (filteredTasks.length === 0) {
        taskList.innerHTML = '<p class="no-tasks">لا توجد مهام</p>';
        return;
    }
    
    filteredTasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        const subjectClass = getSubjectClass(task.subject);
        const subjectText = getSubjectText(task.subject);
        
        taskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} 
                   data-id="${task.id}">
            <span class="task-text">${task.text}</span>
            <span class="task-subject ${subjectClass}">${subjectText}</span>
            <button class="delete-task" data-id="${task.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        taskList.appendChild(taskItem);
    });
    
    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', toggleTaskComplete);
    });
    
    document.querySelectorAll('.delete-task').forEach(button => {
        button.addEventListener('click', deleteTask);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskSubject = document.getElementById('taskSubject').value;
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('يرجى إدخال نص المهمة');
        return;
    }
    
    const newTask = {
        id: Date.now(),
        text: taskText,
        subject: taskSubject,
        completed: false
    };
    
    tasks.unshift(newTask);
    taskInput.value = '';
    
    const activeFilter = document.querySelector('.task-filters .filter-btn.active').dataset.filter;
    renderTasks(activeFilter);
}

function toggleTaskComplete(event) {
    const taskId = parseInt(event.target.dataset.id);
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
        task.completed = event.target.checked;
        renderTasks('all');
    }
}

function deleteTask(event) {
    const taskId = parseInt(event.target.closest('.delete-task').dataset.id);
    tasks = tasks.filter(t => t.id !== taskId);
    
    const activeFilter = document.querySelector('.task-filters .filter-btn.active').dataset.filter;
    renderTasks(activeFilter);
}

// ========== دوال مساعدة ==========
function getSubjectIcon(type) {
    const icons = {
        'math': 'fas fa-calculator',
        'physics': 'fas fa-atom',
        'science': 'fas fa-flask',
        'other': 'fas fa-book',
        'reserved': 'fas fa-mosque'
    };
    return icons[type] || 'fas fa-book';
}

function getSubjectClass(type) {
    const classes = {
        'math': 'math',
        'physics': 'physics',
        'science': 'science',
        'other': 'other',
        'reserved': 'reserved'
    };
    return classes[type] || 'other';
}

function getSubjectText(type) {
    const texts = {
        'math': 'رياضيات',
        'physics': 'فيزياء',
        'science': 'علوم',
        'other': 'أخرى',
        'reserved': 'محجوز'
    };
    return texts[type] || 'أخرى';
}

function initProgressBars() {
    document.querySelectorAll('.progress-fill').forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = `${progress}%`;
        }, 500);
    });
}

function updateSessionType() {
    const now = new Date();
    const hours = now.getHours();
    const sessionType = document.getElementById('sessionType');
    
    if (hours >= 5 && hours < 6) {
        sessionType.textContent = 'حفظ وتلخيص';
    } else if (hours >= 14 && hours < 17) {
        sessionType.textContent = 'فهم الدروس + تمارين';
    } else if (hours >= 17 && hours < 18) {
        sessionType.textContent = 'تمارين خفيفة';
    } else if (hours >= 19 && hours < 21) {
        sessionType.textContent = 'حل بكالوريات سابقة';
    } else {
        sessionType.textContent = 'مراجعة';
    }
}

// ========== إعداد المستمعين ==========
function setupEventListeners() {
    // فلتر أيام الجدول
    document.querySelectorAll('.day-filter .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.day-filter .filter-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            renderSchedule(this.dataset.day);
        });
    });
    
    // فلتر المهام
    document.querySelectorAll('.task-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.task-filters .filter-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            renderTasks(this.dataset.filter);
        });
    });
    
    // التحكم في المؤقت
    document.getElementById('startTimer').addEventListener('click', startTimer);
    document.getElementById('pauseTimer').addEventListener('click', pauseTimer);
    document.getElementById('resetTimer').addEventListener('click', resetTimer);
    
    // إضافة مهمة جديدة
    document.getElementById('addTask').addEventListener('click', addTask);
    document.getElementById('taskInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTask();
    });
    
    // تغيير اليوم
    document.getElementById('prevDay').addEventListener('click', () => changeDay(-1));
    document.getElementById('nextDay').addEventListener('click', () => changeDay(1));
    
    // تغيير الثيم
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.theme-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            
            const theme = this.dataset.theme;
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    });
    
    // إعدادات المؤقت
    document.getElementById('studyDuration').addEventListener('change', function() {
        minutes = parseInt(this.value) || 45;
        if (!timerRunning) updateTimerDisplay();
    });
    
    // استعادة الثيم المحفوظ
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.querySelector(`.theme-btn[data-theme="${savedTheme}"]`).classList.add('active');
    
    // استعادة الإعدادات
    loadSettings();
}

function setupMobileNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// ========== الإشعارات ==========
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// ========== التنقل السلس ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ========== حفظ الإعدادات ==========
function loadSettings() {
    // تحميل الإعدادات من localStorage
    const settings = JSON.parse(localStorage.getItem('studyProgramSettings')) || {};
    
    // تطبيق الإعدادات
    if (settings.prayerAlertTime) {
        document.getElementById('prayerAlertTime').value = settings.prayerAlertTime;
    }
    
    if (settings.studyDuration) {
        document.getElementById('studyDuration').value = settings.studyDuration;
        minutes = parseInt(settings.studyDuration);
    }
    
    if (settings.breakDuration) {
        document.getElementById('breakDuration').value = settings.breakDuration;
    }
    
    if (settings.prayerNotifications !== undefined) {
        document.getElementById('prayerNotifications').checked = settings.prayerNotifications;
    }
    
    if (settings.studyNotifications !== undefined) {
        document.getElementById('studyNotifications').checked = settings.studyNotifications;
    }
    
    if (settings.breakNotifications !== undefined) {
        document.getElementById('breakNotifications').checked = settings.breakNotifications;
    }
    
    if (settings.autoAdjustSchedule !== undefined) {
        document.getElementById('autoAdjustSchedule').checked = settings.autoAdjustSchedule;
    }
}

function saveSettings() {
    const settings = {
        prayerAlertTime: document.getElementById('prayerAlertTime').value,
        studyDuration: document.getElementById('studyDuration').value,
        breakDuration: document.getElementById('breakDuration').value,
        prayerNotifications: document.getElementById('prayerNotifications').checked,
        studyNotifications: document.getElementById('studyNotifications').checked,
        breakNotifications: document.getElementById('breakNotifications').checked,
        autoAdjustSchedule: document.getElementById('autoAdjustSchedule').checked
    };
    
    localStorage.setItem('studyProgramSettings', JSON.stringify(settings));
}

// حفظ الإعدادات عند التغيير
document.querySelectorAll('#settings input, #settings select').forEach(element => {
    element.addEventListener('change', saveSettings);
});

// تحديث المؤقت عند تغيير المدة
document.getElementById('studyDuration').addEventListener('change', function() {
    if (!timerRunning) {
        minutes = parseInt(this.value) || 45;
        updateTimerDisplay();
    }
});