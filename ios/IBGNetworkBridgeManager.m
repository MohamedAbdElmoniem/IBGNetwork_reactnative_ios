//  Created by react-native-create-bridge

#import "IBGNetworkBridge.h"
#import <IBGxNetworkManager/IBGxNetworkManager.h>

// import RCTBridge
#if __has_include(<React/RCTBridge.h>)
#import <React/RCTBridge.h>
#elif __has_include(“RCTBridge.h”)
#import “RCTBridge.h”
#else
#import “React/RCTBridge.h” // Required when used as a Pod in a Swift project
#endif


@implementation IBGNetworkBridge
@synthesize bridge = _bridge;

// Export a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html
RCT_EXPORT_MODULE();

// Export methods to a native module
RCT_EXPORT_METHOD(get:(nonnull NSURL *)url
                  parameters:(nullable NSDictionary *)parameters
                  callback:(RCTResponseSenderBlock)callback)
{
  IBGxNetworkManager* manager = [IBGxNetworkManager sharedInstance];
  [manager GET:url parameters:parameters completionHandler:^(id  _Nullable response, NSError * _Nullable error) {
    callback(response);
  }];
}

RCT_EXPORT_METHOD(post:(nonnull NSURL *)url
                  parameters:(nullable NSDictionary *)parameters
                  callback:(RCTResponseSenderBlock)callback)
{
  IBGxNetworkManager* manager = [IBGxNetworkManager sharedInstance];
  [manager POST:url parameters:parameters completionHandler:^(id  _Nullable response, NSError * _Nullable error) {
     callback(@[[NSNull null], response]);
  }];
}


@end
