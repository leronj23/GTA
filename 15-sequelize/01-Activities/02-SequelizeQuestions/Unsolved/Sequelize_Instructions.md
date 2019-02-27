* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
		a promise-based ORM
  	- Answer: What advantages does it offer?
	  	Simplizes making SQL query calls

  	- Answer: How do I install it? How do I incorporate it into my app?
	  	npm i sequelize 
		var sequelize = require('sequelize')

  	- Answer: What the heck is a Sequelize model? What role will it play?
		Models are both the objects that you'll interact with in your application and the primary tables that you'll create and manage in your database.
		building tables

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 
			var Album = sequelize.define('Album', {
  					Country: {
    				type: Sequelize.STRING,
    				allowNull: false
  				}
  				PhoneCode: {
    				type: Sequelize.INTEGER,
    				allowNull: false
  				}
  				Capital: {
    				type: Sequelize.STRING,
    				allowNull: false
  				}
				IndependenceYear: {
    				type: Sequelize.INTEGER,
    				allowNull: false
			},{
				freezeTableName: true // Modals tableNames will be the same 
			});

  		- How would I query for all the records where the Independence Year was less than 50 years ago?
		  	const Op = Sequelize.Op
			Album.findAll({
  				where: {
    				IndependenceYear: {
      					[Op.lt]: 50
    			}
  			}
});
  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
