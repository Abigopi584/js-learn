//Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters,
//only the order of characters can be different. For example, “act” and “tac” are an anagram of each other.


console.log(anagram());
function anagram(str1, str2) {
    let plants = ["oak","elm","beech"];
    plants["tree"] = "Ash";
    plants["tree"] = "cherry";
    plants["flower"] = "rose";

    var garden = [];
    for(let plant in plants) {
        garden.push(plant)
    }

    for(let plant of plants) {
        garden.push(plant)
    }
return garden
}

