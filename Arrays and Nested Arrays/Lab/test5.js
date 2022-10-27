function sorting(words){

    words.sort((a, b) => a.localeCompare(b));
    console.log(words);

    //words.sort() will sort them by different criteria - by capital and small caps

}
sorting(['nest', 'Eggs', 'bite', 'Grip', 'jAw'])