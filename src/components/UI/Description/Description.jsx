import React from 'react';
import classNames from 'classnames'

const Description = ({className = '', isPrimary = false, isSecondary = false, children, ...attrs}) => {
	const classes = classNames('ui-text', className, {
		isPrimary,
		isSecondary,
	})
	return (
	<p className={classes} contentEditable suppressContentEditableWarning spellCheck={false} {...attrs}>{children}</p>
	)
}

export default Description;