package com.example.demo.Config;

import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
	
		registry.addEndpoint("/chat").setAllowedOrigins("*").withSockJS();
	}



	@Override
	public void configureMessageBroker(MessageBrokerRegistry registry) {
	
		registry.setApplicationDestinationPrefixes("/app").enableSimpleBroker("/topic");
	}

}


