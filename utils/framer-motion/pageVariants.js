export const pageVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 1.5,
			ease: "easeInOut",
		},
	},
	exit: {
		opacity: 0,
		transition: {
			delay: 0.5,
			duration: 1.5,
			ease: "easeInOut",
		},
	},
};
