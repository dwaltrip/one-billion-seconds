import React from 'react';

function RadSelect({ onChange, children, ...props }) {
  return (
    <select
      onChange={event => onChange(event.target.value)}
      {...props}
    >
      {children}
    </select>
  )
}

export { RadSelect };

/*
--- Name ideas ---

RadInput
RadSelect
RadCheckbox

Rad
Neat
Ex
Zig
Nice
Fun
Sick
Cool
Rad
Good
Slick
Zap
Zag
*/
