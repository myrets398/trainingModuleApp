ReactDOM.render(
<Router >
    <Route path='/' component={Main}>
          <IndexRoute component={Home}/>
          <Route path="About" component={About}/>
          <Route path="contact" component={Contact} />
      </Route>
  </Router>
    ,document.getElementById('x')
  );
