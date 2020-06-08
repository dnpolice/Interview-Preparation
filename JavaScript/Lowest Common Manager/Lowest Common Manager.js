function getLowestCommonManager(topManager, reportOne, reportTwo) {		
	return getCommonOrg(topManager, reportOne, reportTwo).lowestCommonOrg;
}

function getCommonOrg(manager, reportOne, reportTwo){
	let numOfContaining = 0;
	for (const directReport of manager.directReports){
		const orgInfo = getCommonOrg(directReport, reportOne, reportTwo)
		if (!!orgInfo.lowestCommonOrg) return orgInfo;
		numOfContaining += orgInfo.numOfContaining;		
	}
	if (manager === reportOne || manager === reportTwo){
		numOfContaining++;
	}
	const lowestCommonOrg = numOfContaining == 2 ? manager : null;
	return {lowestCommonOrg, numOfContaining};
}
// Do not edit the line below.
exports.getLowestCommonManager = getLowestCommonManager;
