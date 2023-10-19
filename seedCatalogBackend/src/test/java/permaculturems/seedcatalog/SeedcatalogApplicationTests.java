package permaculturems.seedcatalog;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.bson.Document;

@SpringBootTest
class SeedcatalogApplicationTests {

	private static final String HOST = "localhost";
	private static final String PORT = "27017";
	private static final String DB = "baeldung";
	private static final String USER = "admin";
	private static final String PASS = "password";

	
	@Test
	void contextLoads() {
	}

	private void assertInsertSucceeds(ConfigurableApplicationContext context) {
    String name = "A";

    MongoTemplate mongo = context.getBean(MongoTemplate.class);
    Document doc = Document.parse("{\"name\":\"" + name + "\"}");
    Document inserted = mongo.insert(doc, "items");

    assertNotNull(inserted.get("_id"));
    assertEquals(inserted.get("name"), name);
}

}
