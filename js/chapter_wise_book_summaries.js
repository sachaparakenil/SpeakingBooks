// for first section
const sec_1 = [
    {
        Title: "Introduction | How to Win Friends and Influence People",
        youTube_src: "https://www.youtube.com/embed/v0iajq9h76w",
        download: "./Audio/Chapter wise summaries/How to win Friends and Influence People/Introduction_How_to_Win_Friends_and_Influence_People_160kbps_.mp3"
    },
    {
        Title: "Part 1 | How to WIN Friends and Influence People",
        youTube_src: "https://www.youtube.com/embed/BbM9q4ES7gw",
        download: "./Audio/Chapter wise summaries/How to win Friends and Influence People/Part 1 _ How to WIN Friends and Influence People ( 160kbps ).mp3"
    },
    {
        Title: "Part 2 | How to WIN Friends and Influence People",
        youTube_src: "https://www.youtube.com/embed/b8RgEVftTO8",
        download: "./Audio/Chapter wise summaries/How to win Friends and Influence People/Part 2 _ How to WIN Friends and Influence People ( 160kbps ).mp3"
    },
    {
        Title: "Part 3 | How to WIN Friends and Influence People",
        youTube_src: "https://www.youtube.com/embed/3f4BJpSR00g",
        download: "./Audio/Chapter wise summaries/How to win Friends and Influence People/Part_3_How_to_Win_Friends_and_Influence_People_Animated_Book_160kbps.mp3 2 _ How to WIN Friends and Influence People ( 160kbps ).mp3"
    },
]


const book1 = document.querySelector('.sec-1');
let output1 = '';
sec_1.forEach(element => {
    output1 += `
    <div class="box">
        <p class="embed-text primary">${element.Title}</p>
        <div class="responsive-youtube">
        <div id="youTube-load"></div>
        <iframe width="560" height="315" src="${element.youTube_src}" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
        </div>
        <a href="${element.download}"
        download=""><i class="fas fa-cloud-download-alt"></i> Download Audio</a>
    </div>
    `
});
book1.innerHTML = output1;


// for first section
const sec_2 = [
    {
        Title: "Think & Grow Rich | Introduction",
        youTube_src: "https://www.youtube.com/embed/3dwQzN3vzTQ",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Think & Grow Rich _ Introduction ( 160kbps ).mp3"
    },
    {
        Title: "Chapter 1 | Think & Grow Rich",
        youTube_src: "https://www.youtube.com/embed/jLB5dwAMt2g",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter 1 _ Think & Grow Rich ( 160kbps ).mp3"
    },
    {
        Title: "Chapter 2 | Think & Grow Rich",
        youTube_src: "https://www.youtube.com/embed/s6-5hSl4Amc",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter 2 _ Think & Grow Rich ( 160kbps ).mp3"
    },
    {
        Title: "Chapter 3 | Think & Grow Rich",
        youTube_src: "https://www.youtube.com/embed/_tpWoI1aWAg",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter 3 _ Think & Grow Rich ( 160kbps ).mp3"
    },
    {
        Title: "Chapter 4 | Auto-Suggestions | Think & Grow Rich",
        youTube_src: "https://www.youtube.com/embed/RNMw77siaI0",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter_4_Auto_Suggestions_Think_&_Grow_Rich_160kbps_.mp3"
    },
    {
        Title: "Chapter 5 | Specialized Knowledge | Think & Grow Rich",
        youTube_src: "https://www.youtube.com/embed/RM-fMKNlnXs",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter_5_Specialized_Knowledge_Think_&_Grow_Rich_160kbps_.mp3"
    },
    {
        Title: "Chapter 6 | IMAGINATION | Think & Grow Rich",
        youTube_src: "https://www.youtube.com/embed/5WNIcndYbFo",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter 6 _ IMAGINATION _ Think & Grow Rich ( 160kbps ).mp3"
    },
    {
        Title: "Chapter 7 | Organized Planning | Think & Grow Rich",
        youTube_src: "https://www.youtube.com/embed/1GJ-kfM6beg",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter_7_Organized_Planning_Think_&_Grow_Rich_160kbps_.mp3"
    },
    {
        Title: "Chapter 8 | The Mastery of Procrastination | Think & Grow Rich",
        youTube_src: "https://www.youtube.com/embed/8GXRNRxImvk",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter_8_The_Mastery_of_Procrastination_Think_&_Grow_Rich_160kbps.mp3"
    },
    {
        Title: "Chapter 9 | Persistence | Think & Grow Rich",
        youTube_src: "https://www.youtube.com/embed/6SC47uPbtX4",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter 9 _ Persistence _ Think & Grow Rich ( 160kbps ).mp3"
    },
    {
        Title: "Chapter 10 | Mastermind Group | Think & Grow Rich",
        youTube_src: "https://www.youtube.com/embed/xAqK4tKX5ks",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter_10_Mastermind_Group_Think_&_Grow_Rich_160kbps_.mp3"
    },
    {
        Title: "Chapter 11 | Mindset Transmutation | Think and Grow Rich",
        youTube_src: "https://www.youtube.com/embed/Y1tH_pcQmRE",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter_11_Mindset_Transmutation_Think_and_Grow_Rich_160kbps_.mp3"
    },
    {
        Title: "Chapter 12 | Subconscious Mind | Think & Grow Rich",
        youTube_src: "https://www.youtube.com/embed/ucG1-u6Q79o",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter_12_Subconscious_Mind_Think_&_Grow_Rich_160kbps_.mp3"
    },
    {
        Title: "Chapter 13 | Brain | Think and Grow Rich",
        youTube_src: "https://www.youtube.com/embed/jeKuAOWIYyQ",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter 13 _ Brain _ Think and Grow Rich ( 160kbps ).mp3"
    },
    {
        Title: "Chapter 14 | The Sixth Sense | Think and Grow Rich",
        youTube_src: "https://www.youtube.com/embed/L9qjJ7e8vC4",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter_14_The_Sixth_Sense_Think_and_Grow_Rich_160kbps_.mp3"
    },
    {
        Title: "Chapter 15 | Outfit Fear | Think And Grow Rich",
        youTube_src: "https://www.youtube.com/embed/xF3o0PRNL8E",
        download: "./Audio/Chapter wise summaries/Think and Grow Rich/Chapter 15 _  Outfit Fear _ Think And Grow Rich ( 128kbps ).mp3"
    },
]


const book2 = document.querySelector('.sec-2');
let output2 = '';
sec_2.forEach(element => {
    output2 += `
    <div class="box">
        <p class="embed-text primary">${element.Title}</p>
        <div class="responsive-youtube">
        <div id="youTube-load"></div>
        <iframe width="560" height="315" src="${element.youTube_src}" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
        </div>
        <a href="${element.download}"
        download=""><i class="fas fa-cloud-download-alt"></i> Download Audio</a>
    </div>
    `
});
book2.innerHTML = output2;
