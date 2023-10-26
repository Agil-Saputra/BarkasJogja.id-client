let todayDate = new Date();

export const useCalculatePostDate = (postDate: any) => {
	let difference = todayDate.getTime() - new Date(postDate).getTime();
	let TotalDays = Math.ceil(difference / 86400000);
	let TotalHours = Math.ceil(difference / 3600000);
	let TotalMinutes = Math.ceil((difference / 60000));
	
	if (TotalHours > 24) {
		return `${TotalDays} hari yang lalu`
	} else if (TotalMinutes > 59 ) {
		return `${TotalHours} jam yang lalu`
	} else {
		return `${TotalMinutes} menit yang lalu`
	}

};

