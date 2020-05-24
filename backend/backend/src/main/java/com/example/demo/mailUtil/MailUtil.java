package com.example.demo.mailUtil;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class MailUtil {
	
	public static void sendEmail(String recepient, String username, String userpassword) throws Exception {
		
		System.out.println("Email sending...");
		
		Properties properties = new Properties();
		
		properties.put("mail.smtp.auth", "true");
		properties.put("mail.smtp.starttls.enable", "true");
		properties.put("mail.smtp.host", "smtp.gmail.com");
		properties.put("mail.smtp.port", "587");
		
		String emailAccount = "blackandbluefashions@gmail.com";
		String password = "afproject2020";
		
		Session session = Session.getInstance(properties, new Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(emailAccount, password);
			}
			
		});
		
		Message message = prepareMessage(session, emailAccount, recepient, username, userpassword);
		Transport.send(message);
		System.out.println("Message sent to new store manager");
		
	}
	
	private static Message prepareMessage(Session session, String email, String recepient, String username, String password) {
		try {
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(email));
			message.setRecipient(Message.RecipientType.TO, new InternetAddress(recepient));
			message.setSubject("Login Credentials For BLACK AND BLUE Fashion Store ");
			message.setText(
					"You are now registered as a store manager for BLACK AND BLUE online fashion store.\n\n"
					+"Username: "+username
					+"\n"+
					"Password: "+password);
			return message;
		} catch (AddressException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		}
		return null;
		
		
	}
	

}
