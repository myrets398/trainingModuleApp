Main = React.createClass({

            render: function() {
              return(
                <div>
                    <header>
                      <Link to='/'>
                          <button> home</button>
                      </Link>
                    <Link to='About'>
                        <button>About</button>
                    </Link>
                    <Link to='contact'>
                          <button>Contact</button>
                    </Link></header>

                        {this.props.children}
                    <footer>********** The footer ********** </footer>
                </div>
              );
        }
});
