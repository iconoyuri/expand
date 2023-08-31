gsap.registerPlugin(ScrollTrigger)

let timeline = gsap.timeline({
	scrollTrigger: {
		trigger: '.first-x',
		start: 'center center',
		end: 5000,
		scrub: 1
	}
})

timeline.to('.first-x', {
	scale: 260,
	ease: 'ease.in',
	duration: 4
})

timeline.to(
	'body',
	{
		backgroundColor: '#000'
	},
	1.5
)

timeline.to(
	'.expand > .x',
	{
		opacity: 1
	},
	1.5
)

var expandBeforeRule = CSSRulePlugin.getRule('.expand::before') //get the rule
var expandAfterRule = CSSRulePlugin.getRule('.expand::after') //get the rule
timeline.to([expandBeforeRule, expandAfterRule], {
	duration: 3,
	opacity: 1,
	delay: 2
})

timeline.to('.expand', {
	y: -50,
	duration: 1
})

timeline.from(
	'.reality',
	{
		opacity: 0,
		scale: 50,
		duration: 4,
		ease: 'power1.in'
	},
	'<'
)

timeline.to('.expand', {
	scale: 0,
	y: -350,
	delay: 3,
	duration: 3
})
timeline.to(
	'.reality',
	{
		y: -200,
		delay: 3,
		duration: 3
	},
	'<'
)
timeline.to(
	'.unknown',
	{
		y: () => `-=${window.innerHeight / 2 + 50}`,
		delay: 3,
		duration: 3
	},
	'<'
)

timeline.to('.reality, .unknown p', {
	scale: 0,
	y: -350,
	delay: 3,
	duration: 3
})

timeline.to(
	'.unknown .join-btn',
	{
		y: '-10rem',
		delay: 3,
		duration: 3
	},
	'<'
)

timeline.to(
	'footer',
	{
		yPercent: -100
	},
	'<'
)


let joinButton = document.getElementById('join-btn')
// console.log(joinButton)
joinButton.onclick = () => {
    // console.log('test')
}