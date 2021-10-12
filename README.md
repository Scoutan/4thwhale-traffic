<h1>4th Whale Traffic Lights</h1>
<hr>
<h3>1st approach</h3>
<p>
  After building the layout and design of the 3 traffic lights, I thought it would be convenient to use CSS-in-JS to directly pass props to style the light's illumination based on a timer. So I researched a bit and opt to try React-JSS. It was mostly fine but I would get a class name mismatch error, indicating server and client have mismatched class names. After a bit of digging on Google, I found out that, with nextjs, we would need to make the let Server Side Rendering (SSR) handle the CSS but I could not resolve the issue after attempting a few solutions. So I decided to simply use CSS modules.
</p>
<p>
  In terms of the logic behind the lights' transition, I used 3 useEffect hooks. All 3 would start a setTimeout() at the same time, so I can control the time duration for each light. After 20 seconds, the 3 hooks will run again, triggered by a setState() in the last light's function.
</p>
<h3>2nd approach</h3>
<p>
  I was not satisfied with using 3 useEffect hooks as I feel I should be able to come up with a more efficient code. So I thought along the lines of nested function calls and came up with nesting setTimeout(). Then, it's essentially the same as the 1st approach but with only one useEffect hook: each setTimeout() would trigger another setTimeout() and the last one would also have a setState() to trigger the useEffect hook again.
</p>
<h3>3rd approach</h3>
<p>
  While thinking about the 2nd approach, I also had the idea to use a seconds counter and I would update the light based on the seconds that has passed. I thought it would be a simple case by having a useState() keeping track of the counter, inside a setInterval(). Interestingly enough, it got complicated quite fast. I learned that setInterval() would only read the state once and keep it in memory. It means that I could not get the updated value of the state and use it to in conditional statements. After some research online, I found out that this is a use case for the useRef() hook. Basically, we need to save the updated state value into the useRef() as this hook is designed to "persist for the full lifetime of the component" (https://reactjs.org/docs/hooks-reference.html#useref). So, useRef() would remember the last updated value and keep updating as instructed.
</p>
<h3>4th approach</h3>
<p>
  The 4th approach is more of a search online to see how my solutions compare what I could find. And I found a clever solution on https://codesandbox.io/s/traffic-light-using-hooks-xlw615w7ow. This solution only uses a useState() and a modulo operation to make the lights and duration go on an endless rotation. By numbering the 3 different lights, it can use (state + 1) % 3 in the setState(), with a initial value, to pratically get all the 3 numbers in a loop. Personally, I think this is the best approach.<br/>
  For example:<br/>
  (1 + 1) % 3 = 2<br/>
  (2 + 1) % 3 = 0<br/>
  (0 + 1) % 3 = 1<br/>
</p>

