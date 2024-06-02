const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName){
        this.username = newName;
    },

    updatePlayTime(hours){
        this.playTime += hours;
    },

    getInfo(){
        return `${this.username} has ${this.playTime} active hours!`;
    }
};

function checkForSpam(message) {
    const messageLowerCase = message.toLowerCase();
    return messageLowerCase.includes('spam') || messageLowerCase.includes('sale');
}

console.log('Task 3');
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"