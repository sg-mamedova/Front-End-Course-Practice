
export default function formatTime(seconds) {
   
    let hh = Math.floor(seconds / 3600);
    const mm = Math.floor((seconds - hh * 3600) / 60);
    const ss = seconds - hh * 3600 - mm * 60;
    
    const period = (hh / 12 < 1) ? "AM" : "PM";
    
    if (hh > 12 && hh !== 0) {
        hh = hh - 12;
    }
  
    if (hh === 0) {
        hh = 12;
    }
    
    const newHH = (hh < 10 ? `0${hh}` : hh);
    const newMM = (mm < 10 ? `0${mm}` : mm);
    const newSS = (ss < 10 ? `0${ss}` : ss);
    
    return `${newHH}:${newMM}:${newSS} ${period}`;
}


// need fix

// formatTime(43200)// "12:00:00 PM"
// formatTime(46799)// "12:59:59 PM"
