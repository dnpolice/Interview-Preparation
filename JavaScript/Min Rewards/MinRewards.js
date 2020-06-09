function minRewards(scores) {
    const rewards = new Array(scores.length).fill(1);
    for (let i = 1; i < scores.length; i++)
        if (scores[i-1] < scores[i])
            rewards[i] = rewards[i-1] +1;
    for (let j = scores.length-2; j >= 0; j--){
        if (scores[j] > scores[j+1]){
            rewards[j] = Math.max(rewards[j], rewards[j+1] +1);
        }
    }
    return rewards.reduce((a, b) => a + b)
}
