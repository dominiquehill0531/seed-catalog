package permaculturems.seedcatalog;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.io.Console;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.bson.Document;

@SpringBootTest
class SeedcatalogApplicationTests {
	
	@Test
	void contextLoads() {
	}

	@Test
	void mongoInsertSucceeds(ConfigurableApplicationContext context) {
		String name = "A";

		MongoTemplate mongo = context.getBean(MongoTemplate.class);
		Document doc = Document.parse("{\"name\":\"" + name + "\"}");
		Document inserted = mongo.insert(doc, "test");

		assertNotNull(inserted.get("_id"));
		assertEquals(inserted.get("name"), name);
	}

}
