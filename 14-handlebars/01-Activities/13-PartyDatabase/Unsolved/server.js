var orm = require("./orm.js");

//orm.selectAll("parties", "party_name");

//orm.selectAll("clients", "client_name");

//orm.selectWhere("parties", "party_type", "grown-up");

orm.findWhoHasMost(["client_name", "party_name"],"clients", "parties", "id", "client_id");
