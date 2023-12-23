// declarations.d.ts
declare module '*.svg' {
	import React = require('react')
	const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	export default SVG
}
