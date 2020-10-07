function formatTime(time) {
    const now = Date.now();
    const s = Math.round((now - time)/1000);

    // 0-15 - Just now
    if (s <= 15) return 'Just now';

    // 16 - 59s - [x]s
    if (s <= 59) return s + 's ago';

    // 1-59min - [x]min
    // const min = (s - s % 60) / 60;
    const min = Math.floor (s / 60);
    if (min <= 59) return min + 'm ago';

    // 1-23h - [x]h
    // const h = (s - s % 60 - min % 60 * 60 ) / 60 / 60;
    const h = Math.floor(min / 60);
    if (h <= 23) return h + 'h ago';

    // 1-30d - [x]d 
    const d = Math.floor(h / 24);
    if (d <= 7) return d + 'm ago';   

    // 1-4w - [x]w
    const w = Math.floor(d / 7);
    if (w <= 4) return w + 'w ago';  

    // 1-11m - [x]m
    const m = Math.floor(d / 30);
    if (m <= 11) return m + 'm ago'; 

    // 1y - [x]y
    const y = Math.floor(d / 365.25)
    return y + 'y ago';

}

export default formatTime;