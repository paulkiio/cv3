import React, { Component } from "react";
import { Col } from 'reactstrap';
import './MainImage.sass'

export default class MainImage extends Component {
	state = {}
	render () {
		return (
			<Col id="main-image" lg={{size: 6}} md={{size: 6}} sm={{size: 12, order: 1}} xs={{size: 12, order: 1}}>
				<img src="https://lh3.googleusercontent.com/nAH5eqAUHcGqESO3MTYn_ufFsXtuXSD2KUeaW4vEDRTMdzYtUGRJprvoOko3eLrCtQw2fY7NI57AaRyv-nSDdSNmj-b2qBjS8EwdQLCK4KiPFvJpVwoyBQrUPXbVa7iZQtR0ABICaqoOuwbMrqXQNj8mCuRjdYWTikORHGQw_qjeILWlnICgWIYZax8HGT0Yx8F8nhMo_8PH14_2wpLLAwgb22pcP8nOsPn4BCbjQlpaGylD1E0bG6RDPzOyHjDHM3o7oAoMhMqgqT_bcGfDeTVieF3ADr723oiXo7wDSTPH3GQKQGqQof69UvEvMuvYjOC_5QdZfSWpIhQSpkWmgPoT5ce4qANojDGta4-vdOWWK-epr4CcuiIasXjeSsWbI3Q_W0ichVH9hGXZGtLf58c4TAXAdktW-pl-UjnVImUzLErGH2cUABanUzADHZmHI4QYR7Rw7f7eUvGF1dQn8ievvbmVM1iOsFxTnxqfyAA5Cflev2IxAYf0SSrpFESXDL_33BEGEd5bw9MsCVKlZ1H1ZDzg3wnUXA5D-Ak6wc4eJQLOlxI4w7QNdHGfjhpxB0AWaO8Ye-NqTHJFa_jLxoM130UysAW24CQ8ItrFUvm2pRDaPJz4T0hAamlnNbFmaRKYRe3rwp-WWChGFtrauRqloQ=w331-h584-no" className="img-fluid" width="100%" alt=""/>
			</Col>
		);
	}
}