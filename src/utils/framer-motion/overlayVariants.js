export const overlayVariants = {
	titleHidden: {
		zIndex: -1,
		y: -20,
		opacity: 0,
	},
	titleVisible: {
		zIndex: 1,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: "easeOut",
		},
	},
	spanHidden: {
		zIndex: -1,
		y: -20,
		opacity: 0,
	},
	spanVisible: {
		zIndex: 1,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.5,
			ease: "easeOut",
		},
	},
	linkHidden: {
		zIndex: -1,
		y: -20,
		opacity: 0,
	},
	linkVisible: {
		zIndex: 1,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.8,
			ease: "easeOut",
		},
	},
};
