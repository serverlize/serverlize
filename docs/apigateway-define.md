---
id: apigateway-define
title: Defining APIs
---

To get started, we will create an API. The easiest way to create one is
through the CLI:

```bash
$ slz api create MyApiGateway --domainName myapi.mydomain.com
```

Under `app/ApiGateways/`, there should now be a new file called
`MyApiGateway.ts`. Inside it should look like the following:

```typescript
import { ApiGateway } from '@serverlize/framework';
import { restApi } from '@serverlize/api-gateway';

@restApi()
export default class MyApiGateway extends ApiGateway {
}
```

##
