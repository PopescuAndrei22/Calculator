#include <node_api.h>

#define NAPI_CALL(env, call)                                      \
  do                                                              \
  {                                                               \
    napi_status status = (call);                                  \
    if (status != napi_ok)                                        \
    {                                                             \
      const napi_extended_error_info *error_info = NULL;          \
      napi_get_last_error_info((env), &error_info);               \
      bool is_pending;                                            \
      napi_is_exception_pending((env), &is_pending);              \
      if (!is_pending)                                            \
      {                                                           \
        const char *message = (error_info->error_message == NULL) \
                                  ? "empty error message"         \
                                  : error_info->error_message;    \
        napi_throw_error((env), NULL, message);                   \
        return NULL;                                              \
      }                                                           \
    }                                                             \
  } while (0)

int sum(int x, int y, int z){
  if(z==0)
      return x+y;
  if(z==1)
      return x-y;
  if(z==2)
      return x*y;
  if(z==3)
      return x/y;

    return 0;
}

napi_value Operations(napi_env env, napi_callback_info info)
{
  size_t argc = 3;
  napi_value args[3];
  int64_t x;
  int64_t y;
  int64_t z;
  int64_t suma;
  napi_value output;

  NAPI_CALL(env,napi_get_cb_info(env, info, &argc, args, NULL, NULL));

  NAPI_CALL(env,napi_get_value_int64(env, args[0], &x));

  NAPI_CALL(env,napi_get_value_int64(env, args[1], &y));

  NAPI_CALL(env,napi_get_value_int64(env, args[2], &z));

  suma = sum(x, y, z);

  NAPI_CALL(env,napi_create_double(env, suma, &output));

  return output;
}

napi_value init(napi_env env, napi_value exports)
{
  napi_value operations;

  napi_create_function(env, nullptr, 0, Operations, nullptr, &operations);

  return operations;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, init);